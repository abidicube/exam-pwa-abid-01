import { gql } from '@apollo/client';

const itemBlog = `
    id
    author_id
    title
    blog_post_url
    category_ids
    short_content
    content
    url_key
    created_at
    updated_at
    customer_groups
    tag_names
    status
    publish_date
    featured_image_url
    meta_twitter_site
    meta_keywords
    meta_description
    meta_title
`;

export const getCategory = gql`
    query getCategory($category_id: Int, $url_key: String) {
        getBlogCategory(category_id: $category_id, url_key: $url_key) {
            data {
                id
                name
                url_key
                meta_description
                meta_title
                status
                sort_order
                updated_at
                created_at
            }
        }
    }
`;

export const getBlogCategoryList = gql`
    query getBlogCategoryList {
        getBlogCategoryList {
            status
            message
            total_count
            blog_category {
                category_id
                identifier
                title
            }
        }
    }
`;

export const getAllPost = gql`
    query getAllBlog(
        $page_size: Int,
        $current_page: Int,
        $category_id: Int,
        $id: Int,
        $url_key: String,

    ){
        getBlogByFilter(
            page_size: $page_size,
            current_page: $current_page,
            filters: {
                category_id: $category_id,
                id: $id,
                url_key: $url_key
            }
        ) {
            page_size,
            total_count
            total_pages
            current_page
            items {
             ${itemBlog}
            }
        }
    }
`;

export const getBlogPostList = gql`
    query getBlogPostList($filter: BlogPostFilterInput, $pageSize: Int, $currentPage: Int, $sort: BlogPostSortInput) {
        getBlogPostList(filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
            status
            message
            total_count
            page_info {
                page_size
                current_page
                total_pages
            }
            blog_data {
                id
                author_id
                canonical_url
                creation_time
                update_time
                publish_date
                identifier
                meta_description
                meta_keywords
                meta_title
                og_description
                og_title
                og_type
                title
                total_views
                type
                image
                video_link
                categories {
                    id
                    title
                }
                tags {
                    id
                    title
                }
                comments {
                    id
                    content
                }
                content
            }
        }
    }
`;

export const getPostById = gql`
    query getBlog($id: Int) {
        getBlogByFilter(id: $id) {
            data {
                id
                title
                author_id
                url_key
                short_content
                publish_date
                featured_image_url
                featured_image_alt
                content
                created_at
            }
        }
    }
`;

export const awBlogPostWithRelatedPosts = gql`
    query awBlogPostWithRelatedPosts($postId: Int, $storeId: Int) {
        awBlogPostWithRelatedPosts(postId: $postId, storeId: $storeId) {
            related_product {
                id
                attribute_set_id
                name
                sku
                small_image {
                    url
                }
                url_key
                price_range {
                    maximum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        fixed_product_taxes {
                            amount {
                                currency
                                value
                            }
                            label
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                    minimum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        fixed_product_taxes {
                            amount {
                                currency
                                value
                            }
                            label
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                }
            }
        }
    }
`;

export default {};
