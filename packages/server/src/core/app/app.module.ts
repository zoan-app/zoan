import { Module } from '@nestjs/common'
import { config } from 'core'
import { TypegooseModule } from 'nestjs-typegoose'
import { GraphQLModule } from '@nestjs/graphql'
import { UsersModule } from 'modules/users/users.module'

const appModules = [UsersModule]

@Module({
  imports: [
    TypegooseModule.forRoot(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      introspection: true,
    }),

    ...appModules,
  ],
})
export class AppModule {}
