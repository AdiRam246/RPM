import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OrgModule } from './org/org.module';
import { PatientModule } from './patient/patient.module';
import { FacilityModule } from './facility/facility.module';
import { OrgFacilityModule } from './org-facility/org-facility.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://clinicpass-db-user:T3S6T2@cluster1.lfqlkof.mongodb.net/',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    OrgModule,
    PatientModule,
    FacilityModule,
    OrgFacilityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
