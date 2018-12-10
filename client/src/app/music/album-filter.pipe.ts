import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {
    transform(albums: any, searchAlbum: string): any {
        if (!albums || !searchAlbum) {
            return albums;
        }

        return albums.filter(
            album => {
                return album['im:name'].label.toLowerCase().indexOf(searchAlbum.toLowerCase()) !== -1 ||
                album['im:artist'].label.toLowerCase().indexOf(searchAlbum.toLowerCase()) !== -1  ||
                album.category.attributes.label.toLowerCase().indexOf(searchAlbum.toLowerCase()) !== -1
            }
        );
    }
}