import { Module } from '@nestjs/common'
import config from 'core/config'
import { TypegooseModule } from 'nestjs-typegoose'

@Module({
  imports: [
    TypegooseModule.forRoot(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
  ],
})
export class AppModule {}
