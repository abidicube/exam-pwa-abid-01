import Skeleton from '@common_skeleton';
import Typography from '@common_typography';

const CustomContentPromo = (props) => {
    const {
        welcomeMessage,
    } = props;

    return (
        !welcomeMessage ? (
            <>
                <div className="custom-welcome-message min-h-[36px] flex items-center justify-center">
                    <Skeleton width="100%" height={20} />
                </div>
            </>
        ) : (
            <div className="custom-welcome-message min-h-[36px] flex items-center justify-center">
                <Typography className="!text-neutral-white !text-[14px] !font-normal">
                    {welcomeMessage}
                </Typography>
            </div>
        )
    );
};

export default CustomContentPromo;
