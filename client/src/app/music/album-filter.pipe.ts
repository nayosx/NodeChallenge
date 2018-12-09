import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {
    transform(topAlbums: any, searchTerm: string): any {
        if (!topAlbums || !searchTerm) {
            return topAlbums;
        }

        return topAlbums.filter(album => 
            album['im:artist'].label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}