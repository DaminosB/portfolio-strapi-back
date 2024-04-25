import type { Schema, Attribute } from '@strapi/strapi';

export interface ModuleContainer extends Schema.Component {
  collectionName: 'components_module_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    medias: Attribute.Media;
    gap: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    imagesPerRow: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    backgroundImage: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
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

export interface ModulePleinePage extends Schema.Component {
  collectionName: 'components_module_pleine_pages';
  info: {
    displayName: 'Pleine page';
    description: '';
  };
  attributes: {
    medias: Attribute.Media;
    gap: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    backgroundImage: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    keepHeight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
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
      'module.container': ModuleContainer;
      'module.image-and-text': ModuleImageAndText;
      'module.logos': ModuleLogos;
      'module.pleine-page': ModulePleinePage;
      'module.text-only': ModuleTextOnly;
      'profile.autres-liens': ProfileAutresLiens;
      'profile.social-medias': ProfileSocialMedias;
    }
  }
}
