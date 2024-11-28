import type { Schema, Attribute } from '@strapi/strapi';

export interface ConstructorsBlocTitre extends Schema.Component {
  collectionName: 'components_constructors_bloc_titres';
  info: {
    displayName: 'Bloc titre';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    fontColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#000000'>;
    backgroundOpacity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<100>;
  };
}

export interface ConstructorsMediaConfigurator extends Schema.Component {
  collectionName: 'components_constructors_media_configurators';
  info: {
    displayName: 'Bloc m\u00E9dia';
    icon: 'picture';
    description: '';
  };
  attributes: {
    mediaAssets: Attribute.Media & Attribute.Required;
    label: Attribute.String;
    link: Attribute.String;
    addToCarousel: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    labelColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ConstructorsTextOnly extends Schema.Component {
  collectionName: 'components_module_text_onlies';
  info: {
    displayName: 'Bloc texte';
    icon: 'file';
    description: '';
  };
  attributes: {
    textColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.DefaultTo<'#000000'>;
    alignment: Attribute.Enumeration<
      ['Gauche', 'Droite', 'Centr\u00E9', 'Justifi\u00E9']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
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
        'Satisfy (handwriting)',
        'Courier Prime (mono)'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Roboto (sans serif)'>;
    textPosition: Attribute.Enumeration<['Gauche', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Droite'>;
    richText: Attribute.Blocks & Attribute.Required;
  };
}

export interface ModuleColonneMultiImages extends Schema.Component {
  collectionName: 'components_module_colonne_multi_images';
  info: {
    displayName: 'Colonne multi images';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    mediaBlocks: Attribute.Component<'constructors.media-configurator', true> &
      Attribute.Required;
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
    text: Attribute.Component<'constructors.text-only'>;
    mediaBlocks: Attribute.Component<'constructors.media-configurator', true> &
      Attribute.Required;
    titleBlock: Attribute.Component<'constructors.bloc-titre'>;
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
    text: Attribute.Component<'constructors.text-only'>;
    mediaBlocks: Attribute.Component<'constructors.media-configurator', true> &
      Attribute.Required;
    titleBlock: Attribute.Component<'constructors.bloc-titre'>;
  };
}

export interface ModuleTexte extends Schema.Component {
  collectionName: 'components_module_textes';
  info: {
    displayName: 'Texte seul';
    icon: 'feather';
    description: '';
  };
  attributes: {
    text: Attribute.Component<'constructors.text-only'> & Attribute.Required;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Attribute.Media;
    titleBlock: Attribute.Component<'constructors.bloc-titre'>;
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
    github: Attribute.String;
    pinterest: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'constructors.bloc-titre': ConstructorsBlocTitre;
      'constructors.media-configurator': ConstructorsMediaConfigurator;
      'constructors.text-only': ConstructorsTextOnly;
      'module.colonne-multi-images': ModuleColonneMultiImages;
      'module.container': ModuleContainer;
      'module.pleine-page': ModulePleinePage;
      'module.texte': ModuleTexte;
      'profile.social-medias': ProfileSocialMedias;
    }
  }
}
