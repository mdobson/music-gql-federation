import { CreateAlbumInput } from './create-album.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAlbumInput extends PartialType(CreateAlbumInput) {
  @Field(() => String, { description: 'Album ID' })
  id: string;

  @Field(() => String, { description: 'Album Title' })
  title: string;

  @Field(() => [ID], { description: 'Album Artist' })
  artist_ids: string[];

  @Field(() => Int, { description: 'Album Year' })
  year: number;

  @Field(() => String, { description: 'Album Genre' })
  genre: string;
}
