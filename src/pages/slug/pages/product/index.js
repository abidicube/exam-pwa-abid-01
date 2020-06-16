import Layout from '@components/Layouts';
import { withTranslation } from '@i18n';
import Error from 'next/error';
import { StripHtmlTags } from '@helpers/text';
import { imageSize } from '@config';
import Loading from './components/Loader';
import { getProduct } from './services/graphql';
import Content from './components';
import CustomHeader from './components/header';
import generateSchemaOrg from './helpers/schema.org';

const Page = (props) => {
    let product = {};
    const { slug } = props;
    const { loading, data, error } = getProduct(slug[0]);
    if (error || loading || !data) {
        return (
            <Layout pageConfig={{}} CustomHeader={<CustomHeader />} {...props}>
                <Loading />
            </Layout>
        );
    }
    if (data) {
        product = data.products;
        if (product.items.length === 0) return <Error statusCode={404} />;
    }

    const schemaOrg = generateSchemaOrg(product.items[0]);

    const pageConfig = {
        title: product.items.length > 0 ? product.items[0].name : '',
        bottomNav: false,
        header: 'absolute', // available values: "absolute", "relative", false (default)
        pageType: 'product',
        ogContent: {
            description: {
                type: 'meta',
                value: StripHtmlTags(product.items[0].description.html),
            },
            'og:image': product.items[0].small_image.url,
            'og:image:type': 'image/jpeg',
            'og:description': StripHtmlTags(product.items[0].description.html),
            'og:image:width': imageSize.product.width,
            'og:image:height': imageSize.product.height,
            'og:image:alt': product.items[0].name,
            'og:type': 'product',
            'product:availability': product.items[0].stock_status,
            'product:category': product.items[0].categories[0].name,
            'product:condition': 'new',
            'product:price:currency': product.items[0].price_range.minimum_price.final_price.currency,
            'product:price:amount': product.items[0].price_range.minimum_price.final_price.value,
            'product:pretax_price:currency': product.items[0].price_range.minimum_price.final_price.currency,
            'product:pretax_price:amount': product.items[0].price_range.minimum_price.final_price.value,
        },
        schemaOrg,
    };
    return (
        <Layout pageConfig={pageConfig} CustomHeader={<CustomHeader />} {...props}>
            <Content {...props} data={product.items[0]} />
        </Layout>
    );
};

export default withTranslation()(Page);
