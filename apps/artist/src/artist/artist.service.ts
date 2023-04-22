import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistService {
  private artists: Artist[] = [
    {
      id: '1',
      name: 'Jimmy Buffett',
      label: 'Margaritaville Records',
      album_ids: ['1', '5', '6'],
    },
    {
      id: '2',
      name: 'Alan Jackson',
      label: 'Arista Nashville',
      album_ids: ['2', '5', '6'],
    },
    {
      id: '3',
      name: 'Garth Brooks',
      label: 'Pearl Records',
      album_ids: ['3'],
    },
    {
      id: '4',
      name: 'George Strait',
      label: 'MCA Nashville',
      album_ids: ['4', '5'],
    },
  ];

  create(createArtistInput: CreateArtistInput): Artist {
    const artistRecord = {
      ...createArtistInput,
      id: this.artists.length.toString(),
    };
    this.artists.push(artistRecord);
    return artistRecord;
  }

  findAll(): Artist[] {
    return this.artists;
  }

  findOne(id: string): Artist {
    return this.artists.find((artist) => artist.id === id.toString());
  }

  update(id: string, updateArtistInput: UpdateArtistInput): Artist {
    const artistRecord = this.findOne(id);
    const updatedArtistRecord = {
      ...artistRecord,
      ...updateArtistInput,
    };
    this.artists = this.artists.map((artist) =>
      artist.id === id.toString() ? updatedArtistRecord : artist
    );
    return updatedArtistRecord;
  }

  remove(id: number): void {
    this.artists = this.artists.filter((artist) => artist.id !== id.toString());
  }
}
