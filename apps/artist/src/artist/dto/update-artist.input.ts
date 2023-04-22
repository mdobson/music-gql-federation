import { CreateArtistInput } from './create-artist.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateArtistInput extends PartialType(CreateArtistInput) {
  @Field(() => String, { description: 'Artist ID' })
  id: string;

  @Field(() => String, { description: 'Artist Name' })
  name: string;

  @Field(() => String, { description: 'Artist Label' })
  label: string;

  @Field(() => [ID], { description: 'Artist Album IDs' })
  album_ids: string[];
}
