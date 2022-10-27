import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Radio.module.scss';
import Image from '~/components/Image';
import { PlayCircleIcon, PauseIcon } from '~/components/icons';
import { audioSlice } from '~/redux/features/audioSlice';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function RadioChannel({ data }) {
    const dispatch = useDispatch();
    const radioSrc = useSelector((state) => state.audio.radioSrc);
    const isPlayRadio = useSelector((state) => state.audio.isPlayRadio);
    const handlePlayRadio = () => {
        dispatch(audioSlice.actions.setRadioSrc(data.streaming));
        dispatch(audioSlice.actions.setInforSongPlaying(data));
        dispatch(audioSlice.actions.setIsPlayRadio(true));
        dispatch(audioSlice.actions.setAudioSrc(''));
        dispatch(audioSlice.actions.setPlaylistSong([]));
    };
    return (
        <div className={cx('radio-channel', radioSrc === data.streaming && isPlayRadio ? 'radio-playing' : '')}>
            <div className={cx('radio-thumb')} onClick={handlePlayRadio}>
                <Image src={data.program.thumbnail} alt={data.title} className={cx('image')} />
                {isPlayRadio && radioSrc === data.streaming ? (
                    <PauseIcon className={cx('icon')} />
                ) : (
                    <PlayCircleIcon className={cx('icon')} />
                )}
            </div>
            <div className={cx('radio-information')}>
                <h3 className={cx('radio-name')}>{data.host.name}</h3>
                <p className={cx('quantity-listener')}>{`${data.activeUsers} đang nghe`}</p>
            </div>
            <img src={images.liveLabel} alt="live-label" className={cx('live-label')} />
            <div className={cx('channel-thumb')}>
                <Image src={data.thumbnailM} alt="channel-thumb" className={cx('image')} />
            </div>
        </div>
    );
}
RadioChannel.propTypes = {
    data: PropTypes.object,
};
export default RadioChannel;
