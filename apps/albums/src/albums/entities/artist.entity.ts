import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Artist {
  @Field(() => ID, { description: 'Unique Identifier for Artist' })
  @Directive('@external')
  id: string;
}
