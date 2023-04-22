import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Album } from './album.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Artist {
  @Field(() => ID, { description: 'Unique Identifier for Artist' })
  id: string;

  @Field(() => String, { description: 'Artist Name' })
  name: string;

  @Field(() => String, { description: 'Artist Label' })
  label: string;

  @Field(() => [ID], { description: 'Artist Album IDs' })
  album_ids: string[];

  @Field(() => [Album], { description: 'Artist Albums' })
  albums?: Album[];
}
