/* eslint-disable import/prefer-default-export */
export const getCategories = `
    {
        categoryList {
            children_count
            children {
                id
                level
                name
                path
                url_path
                url_key
                include_in_menu
                children {
                    id
                    level
                    name
                    path
                    url_path
                    url_key
                    image
                    image_path
                    children {
                        id
                        level
                        name
                        path
                        url_path
                        url_key
                        children {
                            id
                            level
                            name
                            path
                            url_path
                            url_key
                        }
                    }
                }
            }
        }
    }
`;

export const getVesMenu = `
    query getVesMenu($alias: String!) {
        vesMenu(alias: $alias) {
            menu_id
            name
            items {
                id
                name
                link
                content_type
                link_type
                category_id
                menu_id
                children {
                    id
                    name
                    link
                    link_type
                    category_id
                    children {
                        id
                        name
                        link
                        link_type
                        category_id
                        children {
                            id
                            name
                            link
                            link_type
                            category_id
                        }
                    }
                }
            }
        }
    }
`;

export const storeConfig = `
    {
        storeConfig {
            secure_base_media_url
            secure_base_static_url
            customer_password_minimum_password_length
            customer_password_required_character_classes_number
            base_media_url
            base_static_url
            base_url
            base_currency_code
            code
            catalog_search_engine
            copyright
            catalog_default_sort_by
            category_url_suffix
            default_title
            default_keywords
            default_description
            default_display_currency_code
            date_of_birth
            gender
            header_logo_src
            head_shortcut_icon
            icube_pinlocation_gmap_key
            locale
            logo_alt
            logo_width
            logo_height
            pwa {
              default_robot
              footer_desktop
              footer_mobile
              ves_menu_enable
              ves_menu_alias
              icon_apple_touch
            }
            store_name
            welcome
            timezone
            title_prefix
            title_suffix
            title_separator
            website_id
            weight_unit
            oauth_access_token_lifetime_customer
            pwa_checkout_debug_enable
            snap_client_key
            allow_guest_checkout
            snap_is_production
            aw_blog_general_enabled
            pickup_store
            cookie_restriction
            login_phone_password
            forgot_password_phone
            global_promo {
              enable
              text_color
              background_color
            }
            weltpixel_newsletter_general_enable
            weltpixel_newsletter_general_version
            weltpixel_newsletter_general_overlay_color
            weltpixel_newsletter_general_overlay_opacity
            weltpixel_newsletter_general_display_mode
            weltpixel_newsletter_general_display_mobile
            weltpixel_newsletter_general_mobile_version
            weltpixel_newsletter_general_popup_cookie_lifetime
            weltpixel_newsletter_general_terms_conditions_consent
            weltpixel_newsletter_general_terms_conditions_text
            weltpixel_newsletter_general_enable_trigger_button
            weltpixel_newsletter_general_trigger_button_title
            weltpixel_newsletter_general_trigger_button_color
            weltpixel_newsletter_general_trigger_button_backgroundcolor
            aw_blog_general_comments_enabled
            aw_blog_general_disqus_forum_code
            aw_blog_related_products_block_layout
            aw_blog_related_products_block_position
            aw_blog_related_products_products_limit
            aw_blog_related_products_display_add_to_cart
            weltpixel_RecentlyViewedBar_general_enable
            weltpixel_thankyoupage_create_account_enable
            payment_travelokapay_public_key
            payment_travelokapay_user_id
            payment_travelokapay_bin_whitelist
            pin_location_latitude
            pin_location_longitude
            minimum_order_amount
            minimum_order_enable
        }
    }
`;

export const getCmsList = `
{
  storeConfig {
    cms_page  
  }
}
`;
