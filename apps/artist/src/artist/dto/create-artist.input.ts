import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
  @Field(() => String, { description: 'Artist Name' })
  name: string;

  @Field(() => String, { description: 'Artist Label' })
  label: string;

  @Field(() => [ID], { description: 'Artist Album IDs' })
  album_ids: string[];
}
