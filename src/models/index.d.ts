import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRentalCarModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RentalCarModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRentalCarModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RentalCarModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RentalCarModel = LazyLoading extends LazyLoadingDisabled ? EagerRentalCarModel : LazyRentalCarModel

export declare const RentalCarModel: (new (init: ModelInit<RentalCarModel>) => RentalCarModel) & {
  copyOf(source: RentalCarModel, mutator: (draft: MutableModel<RentalCarModel>) => MutableModel<RentalCarModel> | void): RentalCarModel;
}