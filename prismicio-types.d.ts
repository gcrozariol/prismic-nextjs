// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = SwiperSlice | ButtonSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *Button → Default → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * Label field in *Button → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label
   * - **API ID Path**: button.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Button → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link
   * - **API ID Path**: button.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<"button", ButtonSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *Swiper → Default → Primary → Swiper Image*
 */
export interface SwiperSliceDefaultPrimarySwiperImageItem {
  /**
   * Image field in *Swiper → Default → Primary → Swiper Image*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: swiper.default.primary.swiper_image[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Swiper → Default → Primary*
 */
export interface SwiperSliceDefaultPrimary {
  /**
   * Swiper Image field in *Swiper → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: swiper.default.primary.swiper_image[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  swiper_image: prismic.GroupField<
    Simplify<SwiperSliceDefaultPrimarySwiperImageItem>
  >;
}

/**
 * Default variation for Swiper Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SwiperSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SwiperSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Swiper*
 */
type SwiperSliceVariation = SwiperSliceDefault;

/**
 * Swiper Shared Slice
 *
 * - **API ID**: `swiper`
 * - **Description**: Swiper
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SwiperSlice = prismic.SharedSlice<"swiper", SwiperSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SwiperSlice,
      SwiperSliceDefaultPrimarySwiperImageItem,
      SwiperSliceDefaultPrimary,
      SwiperSliceVariation,
      SwiperSliceDefault,
    };
  }
}
