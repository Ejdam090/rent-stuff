import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car';
import { NewCarInput } from './dto/new-car.input';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}
  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
