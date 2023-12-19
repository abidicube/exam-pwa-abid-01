/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
import cx from 'classnames';

import Button from '@common_button';
import Typography from '@common_typography';

const generateData = (data, { t }) => (
    <p className={cx('pt-5')}>
        <Typography variant="p2" className={cx('block', 'font-normal')}>
            {data.firstname} {data.lastname}
        </Typography>
        <Typography variant="p2" className={cx('block', 'font-normal', 'pt-3')}>
            {data.city.split(', ')[0]}
        </Typography>
        <Typography variant="p2" className={cx('block', 'font-normal')}>
            {data.country_code === 'ID' ? (
                <>
                    <p>{`${data.street[0]},`}</p>
                    <p>{`Kec. ${data.city.split(', ')[2]}, Kel. ${data.city.split(', ')[1]}`}</p>
                </>
            ) : (
                `${data.street[0]}, ${data.city.split(', ')[2]}, ${data.city.split(', ')[1]}`
            )}
        </Typography>
        <Typography variant="p2" className={cx('block', 'font-normal')}>
            {`${data.city.split(', ')[0]} ${data.postcode}`}
        </Typography>
        <Typography variant="p2" className={cx('block', 'font-normal')}>
            {`T: ${data.telephone}`}
        </Typography>
        <Button link="/customer/account/address" variant="plain" className={cx('pl-0', '!pb-0', 'pt-5')}>
            <Typography variant="bd-2a" className={cx('!text-primary-700')}>
                {t('customer:address:changeAddress')}
            </Typography>
        </Button>
    </p>
);

const AddressView = (props) => {
    const { customer, t } = props;
    const { addresses } = customer;
    let defaultShipping = {};
    let defaultBilling = {};
    let defaultAddress = false;

    for (let index = 0; index < addresses.length; index++) {
        const addr = addresses[index];
        if (addr.default_billing && !defaultBilling.id) {
            defaultBilling = addr;
        }

        if (addr.default_shipping && !defaultShipping.id) {
            defaultShipping = addr;
        }

        if (addr.default_billing === true || addr.default_shipping === true) {
            defaultAddress = true;
        }
    }

    return (
        <div className={cx('pt-10')}>
            <div className={cx('address-title-section', 'pb-[18px]', 'border-b-[1.5px]', 'border-neutral-200', 'flex', 'flex-row')}>
                <Typography variant="h3" className={cx('mobile:max-desktop:hidden', 'pl-0')}>
                    {t('customer:menu:address')}
                </Typography>
                <Button link="/customer/account/profile" variant="plain" className={cx('pl-6', '!py-0')}>
                    <Typography variant="bd-2a" className={cx('!text-neutral-500', 'underline', 'underline-offset-2')}>
                        {t('customer:address:editTitle')}
                    </Typography>
                </Button>
            </div>
            {addresses.length > 0 && defaultAddress ? (
                <div className={cx('flex', 'flex-row', 'pt-[18px]', 'gap-x-5')}>
                    <div className={cx('sm:basis-1/2', 'lg:basis-1/2', 'border-[1px]', 'border-neutral-200', 'rounded-md', 'pl-5', 'py-5')}>
                        <Typography variant="bd-1a" className={cx('!text-neutral-800')}>
                            {t('customer:address:defaultBilling')}
                        </Typography>
                        {generateData(defaultBilling, props)}
                    </div>
                    <div className={cx('sm:basis-1/2', 'lg:basis-1/2', 'border-[1px]', 'border-neutral-200', 'rounded-md', 'pl-5', 'py-5')}>
                        <Typography variant="bd-1a" className={cx('!text-neutral-800')}>
                            {t('customer:address:defaultShipping')}
                        </Typography>
                        {generateData(defaultShipping, props)}
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>{t('customer:address:emptyMessage')}</div>
            )}
        </div>
    );
};

export default AddressView;
