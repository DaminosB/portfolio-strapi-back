import type { Schema, Attribute } from '@strapi/strapi';

export interface ModuleFullpageImage extends Schema.Component {
  collectionName: 'components_module_fullpage_images';
  info: {
    displayName: 'Images pleine page';
    description: '';
    icon: 'picture';
  };
  attributes: {
    medias: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
    numberOfImages: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

export interface ModuleImageAndText extends Schema.Component {
  collectionName: 'components_module_image_and_texts';
  info: {
    displayName: 'Image et texte';
    icon: 'layout';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    medias: Attribute.Media & Attribute.Required;
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
    backgroundImage: Attribute.Media;
    textAndImagesPositions: Attribute.Enumeration<
      ['Image - Texte', 'Texte - Image']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Image - Texte'>;
    textColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#000000'>;
    font: Attribute.Enumeration<
      [
        'Roboto (sans serif)',
        'Open Sans (sans serif)',
        'Montserrat (sans serif)',
        'Lato (sans serif)',
        'Roboto Condensed (sans serif)',
        'Barlow Condensed (sans serif)',
        'Saira Condensed (sans serif)',
        'Merriweather (serif)',
        'PT Serif (serif)',
        'EB Garamond (serif)',
        'Dancing Script (handwriting)',
        'Pacifico (handwriting)',
        'Caveat (handwriting)',
        'Permanent Marker (handwriting)',
        'Satisfy (handwriting)'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Roboto (sans serif)'>;
  };
}

export interface ModuleImagesTailleNormale extends Schema.Component {
  collectionName: 'components_module_images_taille_normales';
  info: {
    displayName: 'Images taille r\u00E9elle';
    description: '';
  };
  attributes: {
    medias: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ModuleLogos extends Schema.Component {
  collectionName: 'components_module_logos';
  info: {
    displayName: 'Logos';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    supportMedia: Attribute.Media;
    logoItem: Attribute.Media & Attribute.Required;
  };
}

export interface ModuleTextOnly extends Schema.Component {
  collectionName: 'components_module_text_onlies';
  info: {
    displayName: 'Texte seul';
    icon: 'feather';
    description: '';
  };
  attributes: {
    textColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#000000'>;
    text: Attribute.Text & Attribute.Required;
    alignment: Attribute.Enumeration<['Left', 'Center', 'Right', 'Justify']> &
      Attribute.Required &
      Attribute.DefaultTo<'Justify'>;
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
    backgroundImage: Attribute.Media;
    font: Attribute.Enumeration<
      [
        'Roboto (sans serif)',
        'Open Sans (sans serif)',
        'Montserrat (sans serif)',
        'Lato (sans serif)',
        'Roboto Condensed (sans serif)',
        'Barlow Condensed (sans serif)',
        'Saira Condensed (sans serif)',
        'Merriweather (serif)',
        'PT Serif (serif)',
        'EB Garamond (serif)',
        'Dancing Script (handwriting)',
        'Pacifico (handwriting)',
        'Caveat (handwriting)',
        'Permanent Marker (handwriting)',
        'Satisfy (handwriting)'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Roboto (sans serif)'>;
  };
}

export interface ModuleThumbnails extends Schema.Component {
  collectionName: 'components_module_thumbnails';
  info: {
    displayName: 'Vignettes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    medias: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
    imagesPerRow: Attribute.Integer;
    backgroundImage: Attribute.Media;
  };
}

export interface ProfileAutresLiens extends Schema.Component {
  collectionName: 'components_profile_autres_liens';
  info: {
    displayName: 'Autres liens';
    icon: 'code';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ProfileSocialMedias extends Schema.Component {
  collectionName: 'components_profile_social_medias';
  info: {
    displayName: 'Social medias';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    facebook: Attribute.String;
    twitter: Attribute.String;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    otherURLs: Attribute.Component<'profile.autres-liens', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'module.fullpage-image': ModuleFullpageImage;
      'module.image-and-text': ModuleImageAndText;
      'module.images-taille-normale': ModuleImagesTailleNormale;
      'module.logos': ModuleLogos;
      'module.text-only': ModuleTextOnly;
      'module.thumbnails': ModuleThumbnails;
      'profile.autres-liens': ProfileAutresLiens;
      'profile.social-medias': ProfileSocialMedias;
    }
  }
}
