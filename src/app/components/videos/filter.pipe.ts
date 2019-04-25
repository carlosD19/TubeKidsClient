import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../../models/video';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: Video[], textFilter: string): Video[] {
  	if (!videos || !textFilter) {
  		return videos;
  	}
  	return videos.filter(video => 
  		video.name.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1);
  }

}
