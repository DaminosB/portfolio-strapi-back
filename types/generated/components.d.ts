import type { Schema, Attribute } from '@strapi/strapi';

export interface ModuleColonneMultiImages extends Schema.Component {
  collectionName: 'components_module_colonne_multi_images';
  info: {
    displayName: 'Colonne multi images';
    icon: 'landscape';
  };
  attributes: {
    medias: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    imageSliderColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
  };
}

export interface ModuleContainer extends Schema.Component {
  collectionName: 'components_module_containers';
  info: {
    displayName: 'Container';
    description: '';
    icon: 'dashboard';
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
    text: Attribute.Component<'module.text-only'>;
    imageSliderColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
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
    icon: 'picture';
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
    text: Attribute.Component<'module.text-only'>;
    imageSliderColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#FFFFFF'>;
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
    alignment: Attribute.Enumeration<
      ['Gauche', 'Droite', 'Centr\u00E9', 'Justifi\u00E9']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
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
    textPosition: Attribute.Enumeration<['Gauche', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Droite'>;
    fontSize: Attribute.Enumeration<
      ['xLarge', 'Large', 'Medium', 'Small', 'xSmall']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Large'>;
    gap: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<20>;
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
      'module.colonne-multi-images': ModuleColonneMultiImages;
      'module.container': ModuleContainer;
      'module.logos': ModuleLogos;
      'module.pleine-page': ModulePleinePage;
      'module.text-only': ModuleTextOnly;
      'profile.autres-liens': ProfileAutresLiens;
      'profile.social-medias': ProfileSocialMedias;
    }
  }
}
