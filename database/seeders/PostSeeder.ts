import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import { StatusPublish } from '../../app/Enums/StatusPublish'
  
export default class PostSeederSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Post.createMany([
      {
        title: 'Title 1',
        description: 'Description 1',
        status: StatusPublish.AKTIF
      },
      {
        title: 'Title 2',
        description: 'Description 2',
        status: StatusPublish.TIDAK_AKTIF
      }
    ])
    }
  }
}
