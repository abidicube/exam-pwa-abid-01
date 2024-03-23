import CmsRenderer from '@core_modules/cms/components/cms-renderer';
import { COLORS } from '@theme_vars';
import Divider from '@common/Divider';
import DesktopInstall from '@core_modules/theme/components/customPWAInstall/desktop';
import dynamic from 'next/dynamic';
import Button from '@common/Button';
import cx from 'classnames';
import Typography from '@common/Typography';

const SwitcherCurrency = dynamic(() => import('@common_currency'), { ssr: false });
const SwitcherLanguage = dynamic(() => import('@common_language'), { ssr: false });

const FooterV2 = (props) => {
    const {
        data, loading, storeConfig, t,
    } = props;
    return (
        <>
            <div className="bg-neutral-700 flex flex-col justify-center items-center">
                {!loading ? <CmsRenderer content={data.cmsBlocks.items[0].content} storeConfig={storeConfig} /> : null}
                <div className="flex flex-col items-center justify-center tablet:flex-row gap-y-6 mb-8 desktop:mt-6 mobile:mt-4">
                    <DesktopInstall
                        t={t}
                        CustomButton={(
                            <Button
                                className={cx('group', 'tablet:mr-6', 'swift-button-install', 'border-neutral-300', 'hover:border-primary-700')}
                                variant="outlined"
                                iconProps={{ className: cx('w-[20px]', 'text-neutral-600', 'inline-block', 'group-hover:!text-primary-700') }}
                            >
                                <Typography className="group-hover:!text-primary-700">{t('common:header:downloadApps')}</Typography>
                            </Button>
                        )}
                    />
                    <div className="flex flex-row gap-6">
                        <SwitcherCurrency
                            {...props}
                            CustomButton={(
                                <Button
                                    className={cx('group', 'swift-currency-switcher', 'border-neutral-300', 'hover:border-primary-700')}
                                    variant="outlined"
                                />
                            )}
                        />
                        <SwitcherLanguage
                            {...props}
                            CustomButton={(
                                <Button
                                    className={cx(
                                        'group',
                                        'swift-language-switcher',
                                        'border-neutral-300',
                                        'hover:border-primary-700',
                                        'focus:border-primary-700',
                                    )}
                                    variant="outlined"
                                />
                            )}
                        />
                    </div>
                </div>
                <Divider />
                <style jsx global>
                    {`
                        .pwa_footer_v2 .mgz-element > .mgz-element-inner > .w-full {
                            overflow-x: hidden;
                        }
                        .pwa_footer_v2 .footer-links.payment-list {
                            background-color: ${COLORS.neutral[600]}
                        }
                        .pwa_footer_v2 .copyright {
                            background-color: ${COLORS.neutral[700]}
                        }
                        .pwa_footer_v2 .copyright * {
                            color: ${COLORS.neutral[200]}
                        }
                        .pwa_footer_v2 > div >.bg-neutral-200 {
                            background-color: ${COLORS.neutral[500]}
                        }
                        .footer-links.social-media .magezon-icon i {
                            color: ${COLORS.neutral.white}
                        }
                        .footer-links a {
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px; /* 150% */
                            margin-bottom: 8px;
                            margin-left: 12px;
                            margin-right: 12px;
                            text-decoration: none;
                            color: ${COLORS.neutral[200]};
                            &:hover {
                                color: ${COLORS.neutral[100]};
                            }
                        }

                        .footer-links .prose {
                            width: 100%;
                            max-width: 100% !important;
                        }

                        .footer-links.payment-list {
                            background: ${COLORS.neutral[50]};
                        }

                        .footer-links.payment-list .prose > div {
                            display: flex;
                            flex-direction: row !important;
                            justify-content: center;
                            flex-wrap: wrap;
                            padding: 6px 0px;
                        }

                        .footer-links.payment-list .prose>div {
                            gap: 1rem;
                        }

                        .footer-links.payment-list .prose img {
                            margin: 0px;
                        }

                        .footer-links .mgz-text .prose > div {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                            padding: 16px;
                        }

                        .footer-links.social-media .magezon-icon i {
                            font-size: 32px;
                        }

                        .footer-links.social-media .magezon-icon .magezon-icon-inner {
                            height: auto;
                            width: 3em;
                        }

                        .footer-links.social-media .mgz-element-inner {
                            padding: 5px 3px;
                        }

                        @media screen and (max-width: 400px) {
                            .footer-links .mgz-text .prose > div {
                                flex-direction: column;
                            }
                        }
                        @media screen and (max-width: 900px) {
                            .footer-links.w-full.flex .prose>div {
                                max-width: 576px;
                            }
                        }


                        .cms-container .section_main-slider .magezon-slider .pointer-events-none {
                            opacity: 1 !important;
                        }
                        .cms-container .section_main-slider .magezon-slider .magezon-slider--button-nav-item {
                            background: rgba(18, 18, 18, 0.40);
                            border-radius: 50%;
                            color: #FFFFFF;
                        }
                        .cms-container .section_product-slider .container-scroll-arrow > button {
                            border-radius: 50% !important;
                            background-color: rgba(18, 18, 18, 0.40) !important;
                        }
                        .cms-container .section_product-slider .container-scroll-arrow > button > span {
                            color: #FFFFFF !important;
                        }
                        @media(max-width: 767px) {
                            .cms-container .section_main-slider .magezon-slider .pointer-events-none {
                                display: none !important;
                            }
                            .cms-container .section_main-slider .magezon-slider .magezon-slide-captions > .absolute {
                                left: 20px !important;
                            }
                            .cms-container .section_main-slider .magezon-slider .magezon-slide-captions .magezon-slide-heading .text-pwa-font {
                                font-size: 26px !important;
                                line-height: normal !important;
                            }
                        }
                        .cms-container .section_banner-2 .image-container,
                        .cms-container .section_banner-3 .image-container {
                            border-radius: 12px;
                            overflow: hidden;
                        }
                        .cms-container .section_banner-2,
                        .cms-container .section_banner-3 {
                            padding-top: 22px;
                            padding-bottom: 22px;
                        }
                        @media(max-width: 1023px) {
                            .cms-container .section_banner-2 .mgz-row > .mgz-column,
                            .cms-container .section_banner-3 .mgz-row > .mgz-column {
                                width: 100% !important;
                                flex-basis: 100% !important;
                            }
                            .cms-container .section_banner-2 .mgz-row > .mgz-column:last-child,
                            .cms-container .section_banner-3 .mgz-row > .mgz-column:first-child {
                                flex-direction: row;
                            }
                            .cms-container .section_banner-2 .mgz-row > .mgz-column:last-child .banner-small,
                            .cms-container .section_banner-3 .mgz-row > .mgz-column:first-child .banner-small {
                                width: 50%;
                                flex-basis: 50%;
                            }
                            .cms-container .section_banner-2 .mgz-row > .mgz-column:last-child .banner-small .image-container,
                            .cms-container .section_banner-3 .mgz-row > .mgz-column:first-child .banner-small .image-container {
                                width: 100% !important;
                            }
                            .cms-container .section_banner-2 .mgz-row > .mgz-column:last-child .banner-small .image-container img,
                            .cms-container .section_banner-3 .mgz-row > .mgz-column:first-child .banner-small .image-container img {
                                width: 100% !important;
                            }
                        }
                        .cms-container .section_product-slider .section_row-title > .mgz-element-inner {
                            position: relative;
                            margin-bottom: 10px;
                            border-bottom: 0 transparent !important;
                        }
                        .cms-container .section_product-slider .section_row-title > .mgz-element-inner:after {
                            position: absolute;
                            content: '';
                            width: calc(100% - 20px);
                            left: 10px;
                            bottom: 0;
                            border-bottom: 1px solid #EBECEE;
                        }
                        .cms-container .section_product-slider .mgz-text .prose {
                            padding-right: 5px;
                        }
                        .cms-container .section_product-slider .mgz-text .prose a:after {
                            content: '';
                            height: 10px;
                            width: 10px;
                            border-right: 2px solid #242424;
                            border-bottom: 2px solid #242424;
                            transform: rotate(-45deg);
                        }
                    `}
                </style>
            </div>
        </>
    );
};

FooterV2.propTypes = {};

export default FooterV2;
