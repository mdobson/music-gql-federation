import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [
    {
      id: '1',
      title: 'Volcano',
      artist_ids: ['1'],
      year: 1979,
      genre: 'Country',
    },
    {
      id: '2',
      title: "Don't Rock the Jukebox",
      artist_ids: ['2'],
      year: 1991,
      genre: 'Country',
    },
    {
      id: '3',
      title: 'No Fences',
      artist_ids: ['3'],
      year: 1990,
      genre: 'Country',
    },
    {
      id: '4',
      title: 'Ocean Front Property',
      artist_ids: ['4'],
      year: 1986,
      genre: 'Country',
    },
    {
      id: '5',
      title: 'Live at Texas Stadium',
      artist_ids: ['1', '2', '4'],
      year: 2007,
      genre: 'Country',
    },
    {
      id: '6',
      title: '5 oclock Somewhere',
      artist_ids: ['1', '2'],
      year: 2005,
      genre: 'Country',
    },
  ];

  create(createAlbumInput: CreateAlbumInput): Album {
    const albumRecord = {
      ...createAlbumInput,
      id: this.albums.length.toString(),
    };
    this.albums.push(albumRecord);
    return albumRecord;
  }

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: string): Album {
    return this.albums.find((album) => album.id === id.toString());
  }

  update(id: string, updateAlbumInput: UpdateAlbumInput): Album {
    const albumRecord = this.findOne(id);
    const updatedAlbumRecord = {
      ...albumRecord,
      ...updateAlbumInput,
    };
    this.albums = this.albums.map((album) =>
      album.id === id.toString() ? updatedAlbumRecord : album
    );
    return updatedAlbumRecord;
  }

  remove(id: string): void {
    this.albums = this.albums.filter((album) => album.id !== id.toString());
  }
}
