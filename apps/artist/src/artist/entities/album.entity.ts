import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Album {
  @Field(() => ID, { description: 'Unique Identifier for Album' })
  @Directive('@external')
  id: string;
}
