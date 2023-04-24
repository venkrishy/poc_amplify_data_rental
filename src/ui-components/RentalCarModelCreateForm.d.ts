/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RentalCarModelCreateFormInputValues = {
    name?: string;
    price?: number;
    description?: string;
    imageUrl?: string;
};
export declare type RentalCarModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RentalCarModelCreateFormOverridesProps = {
    RentalCarModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RentalCarModelCreateFormProps = React.PropsWithChildren<{
    overrides?: RentalCarModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RentalCarModelCreateFormInputValues) => RentalCarModelCreateFormInputValues;
    onSuccess?: (fields: RentalCarModelCreateFormInputValues) => void;
    onError?: (fields: RentalCarModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RentalCarModelCreateFormInputValues) => RentalCarModelCreateFormInputValues;
    onValidate?: RentalCarModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function RentalCarModelCreateForm(props: RentalCarModelCreateFormProps): React.ReactElement;
