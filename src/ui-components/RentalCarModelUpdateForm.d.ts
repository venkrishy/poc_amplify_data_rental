/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RentalCarModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RentalCarModelUpdateFormInputValues = {
    name?: string;
    price?: number;
    description?: string;
    imageUrl?: string;
};
export declare type RentalCarModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RentalCarModelUpdateFormOverridesProps = {
    RentalCarModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RentalCarModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: RentalCarModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rentalCarModel?: RentalCarModel;
    onSubmit?: (fields: RentalCarModelUpdateFormInputValues) => RentalCarModelUpdateFormInputValues;
    onSuccess?: (fields: RentalCarModelUpdateFormInputValues) => void;
    onError?: (fields: RentalCarModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RentalCarModelUpdateFormInputValues) => RentalCarModelUpdateFormInputValues;
    onValidate?: RentalCarModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RentalCarModelUpdateForm(props: RentalCarModelUpdateFormProps): React.ReactElement;
