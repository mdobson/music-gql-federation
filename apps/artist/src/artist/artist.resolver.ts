import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ID,
  ResolveReference,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { Artist } from './entities/artist.entity';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { Album } from './entities/album.entity';

@Resolver(() => Artist)
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  // @Mutation(() => Artist)
  // createArtist(
  //   @Args('createArtistInput') createArtistInput: CreateArtistInput
  // ) {
  //   return this.artistService.create(createArtistInput);
  // }

  @Query(() => [Artist], { name: 'artists' })
  findAll() {
    return this.artistService.findAll();
  }

  @Query(() => Artist, { name: 'artist' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.artistService.findOne(id);
  }

  // @Mutation(() => Artist)
  // updateArtist(
  //   @Args('updateArtistInput') updateArtistInput: UpdateArtistInput
  // ) {
  //   return this.artistService.update(updateArtistInput.id, updateArtistInput);
  // }

  // @Mutation(() => Artist)
  // removeArtist(@Args('id', { type: () => Int }) id: number) {
  //   return this.artistService.remove(id);
  // }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    console.log('Looking for artist with id: ', reference.id);
    return this.artistService.findOne(reference.id);
  }

  @ResolveField((of) => [Album])
  albums(@Parent() artist: Artist): any {
    const albumResolution = artist.album_ids.map((id) => {
      return { __typename: 'Album', id };
    });

    console.log('Album Resolution: ', albumResolution);
    return albumResolution;
  }
}
