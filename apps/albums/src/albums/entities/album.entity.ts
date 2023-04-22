import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Artist } from './artist.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Album {
  @Field(() => ID, { description: 'Unique Identifier for Album' })
  id: string;

  @Field(() => String, { description: 'Album Title' })
  title: string;

  @Field(() => [Artist], { description: 'Album Artist' })
  artists?: Artist[];

  @Field(() => [ID], { description: 'Album Artist ID' })
  artist_ids: string[];

  @Field(() => Int, { description: 'Album Year' })
  year: number;

  @Field(() => String, { description: 'Album Genre' })
  genre: string;
}
