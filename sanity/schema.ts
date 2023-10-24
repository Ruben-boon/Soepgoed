import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './schemas/heroType'
import { pageType } from './schemas/pageType'
import { textSingleType } from './schemas/textSingleType'
import { textAndImageType } from './schemas/textAndImageType'
import { featureType } from './schemas/featureType'
import { postType } from './schemas/postType'
import { settingsType } from './schemas/settingsType'
import { authorType } from './schemas/authorType'
import { carouselType } from './schemas/carouselType'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, pageType, heroType,carouselType, textSingleType, textAndImageType, featureType],
}
