import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({response}: HttpContextContract) {
    const model = await Post.all()
    return response.json(model)
  }
  public async store({request, response}: HttpContextContract) {
    const title = request.input('title')
    const description = request.input('description')
    const status = request.input('status')
    const model = new Post()
    model.title = title;
    model.description = description
    model.status = status

    let saveModel = await model.save()

    if(saveModel){
      return response.json({ message: 'save data', model})
    }else{
      return response.json({ message: 'failed data', model: null})
    }
  }

  public async show({ response, params}: HttpContextContract) {
    const { id } = params
    const model = await Post.find(id)
    if(model == null) return response.status(404).json({ message: 'Show Data', model: null})
    return response.json({ message: 'Show Data', model})
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ params, response}: HttpContextContract) {
     const { id } = params
     const model = await Post.findOrFail(id)
     await model.delete()
     return response.json({ message: 'Delete data', model:null)
  }
}
