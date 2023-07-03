/* eslint-disable @typescript-eslint/no-empty-function */
import { Album } from '@/Domain/entities/Album.ts'
import { Track } from '@/Domain/entities/Track.ts'

describe('Album ', () => {

  describe('When init', () => {
    it('should extract year fromt date', async () => {
      //Arrange
      let album: Album;

      //act
      album = new Album("image", "name", "id", "2020-08-03", new Array<Track>());

      //Assert
      expect(album.year).toBe(2020);
    })
  
  })
  
})

