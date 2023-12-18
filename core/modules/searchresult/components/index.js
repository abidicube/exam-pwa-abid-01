import React from 'react';
import Product from '@plugin_productlist';
import Typography from '@common_typography';
import CategoryList from '@core_modules/searchresult/components/CategoryList';
import SellerList from '@core_modules/searchresult/components/SellerList';
import Show from '@common/Show';

const SearchResult = (props) => {
    const {
        storeConfig, t, q, isLogin,
    } = props;
    return (
        <div className="flex flex-col w-full h-full">
            {/* add url path if no redirect to slug */}
            <div className="hidden-mobile">
                <Typography variant="span" className="flex flex-row justify-between items-center uppercase">
                    {t('catalog:title:searchResult')}
                    {': '}
                    {q}
                </Typography>
            </div>
            <CategoryList {...props} />
            <Show when={storeConfig.enable_oms_multiseller === '1'}>
                <SellerList {...props} />
            </Show>
            <div className="flex flex-col gap-4">
                <Typography variant="h2" className="uppercase">
                    {t('common:product:name')}
                </Typography>
                <Product
                    defaultSort={{ key: 'relevance', value: 'DESC' }}
                    url_path="catalogsearch/advanced/result"
                    showTabs
                    catalog_search_engine={storeConfig.catalog_search_engine}
                    t={t}
                    storeConfig={storeConfig}
                    isLogin={isLogin}
                />
            </div>
        </div>
    );
};

export default SearchResult;
