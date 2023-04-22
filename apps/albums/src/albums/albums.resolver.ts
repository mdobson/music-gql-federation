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
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { Artist } from './entities/artist.entity';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  // @Mutation(() => Album)
  // createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
  //   return this.albumsService.create(createAlbumInput);
  // }

  @Query(() => [Album], { name: 'albums' })
  findAll() {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.albumsService.findOne(id);
  }

  // @Mutation(() => Album)
  // updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
  //   return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  // }

  // @Mutation(() => Album)
  // removeAlbum(@Args('id', { type: () => Int }) id: string) {
  //   return this.albumsService.remove(id);
  // }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    console.log('Looking for album with id: ', reference.id);
    return this.albumsService.findOne(reference.id);
  }

  @ResolveField((of) => [Artist])
  artists(@Parent() album: Album): any {
    const artistResolution = album.artist_ids.map((id) => {
      return { __typename: 'Artist', id };
    });

    console.log('Artist Resolution: ', artistResolution);
    return artistResolution;
  }
}
