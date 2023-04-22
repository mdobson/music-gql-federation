import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field(() => String, { description: 'Album Title' })
  title: string;

  @Field(() => [ID], { description: 'Album Artist' })
  artist_ids: string[];

  @Field(() => Int, { description: 'Album Year' })
  year: number;

  @Field(() => String, { description: 'Album Genre' })
  genre: string;
}
