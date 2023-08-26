import { Field, InputType } from "@nestjs/graphql"
import { IsEnum, IsHexColor, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator"
import { Currency } from "src/interfaces/enums/Currency"
import { WalletType } from "src/interfaces/enums/WalletType"
import { IsWaddObjectId } from "src/validators/IsWaddObjectIs"

@InputType()
export class CreateWalletGQLInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string

  @Field()
  @IsNotEmpty()
  @IsNumber()
  order: number

  @Field()
  @IsNotEmpty()
  @IsNumber()
  initial_balance: number

  @Field()
  @IsNotEmpty()
  @IsEnum(Currency)
  default_currency: Currency

  @Field()
  @IsNotEmpty()
  @IsEnum(WalletType)
  type: WalletType

  @Field()
  @IsNotEmpty()
  @IsHexColor()
  color_hex: string

  @Field()
  @IsNotEmpty()
  @IsUrl()
  icon_url: string
}

@InputType()
export class UpdateWalletGQLInput {
  @Field()
  @IsNotEmpty()
  @IsWaddObjectId()
  id: string

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string

  @Field()
  @IsNotEmpty()
  @IsNumber()
  order: number

  @Field()
  @IsNotEmpty()
  @IsNumber()
  initial_balance: number

  @Field()
  @IsNotEmpty()
  @IsEnum(Currency)
  default_currency: Currency

  @Field()
  @IsNotEmpty()
  @IsEnum(WalletType)
  type: WalletType

  @Field()
  @IsNotEmpty()
  @IsHexColor()
  color_hex: string

  @Field()
  @IsNotEmpty()
  @IsUrl()
  icon_url: string
}
