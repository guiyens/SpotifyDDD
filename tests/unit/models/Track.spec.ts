/* eslint-disable @typescript-eslint/no-empty-function */
import { Track } from '@/Domain/entities/Track.ts'

describe('Track ', () => {

  describe('When init', () => {
    it('should convert milliseconds duration to custom string format', async () => {
      //Arrange
      let track: Track;

      //act
      track = new Track("image", "name", "id", 60000, "trackUrl");

      //Assert
      expect(track.duration).toBe("1:00");
    })
  
  })
  
})

