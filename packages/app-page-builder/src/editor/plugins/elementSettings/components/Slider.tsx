import * as React from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import { Typography } from "@webiny/ui/Typography";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Slider as SliderCmp } from "@webiny/ui/Slider";

type SliderProps = {
    label: string;
    value?: string | number;
    valueKey?: any;
    defaultValue?: any;
    updatePreview(value: any): void;
    updateValue(value: any): void;
    min: number;
    max: number;
    step: number;
};

const Slider = ({
    label,
    value,
    updatePreview,
    updateValue,
    min = 0,
    max = 100,
    step = 1
}: SliderProps) => {
    return (
        <Grid>
            <Cell span={4}>
                <Typography use={"overline"}>{label}</Typography>
            </Cell>
            <Cell span={8}>
                <SliderCmp
                    value={value}
                    onChange={updateValue}
                    onInput={updatePreview}
                    min={min}
                    max={max}
                    discrete
                    step={step}
                />
            </Cell>
        </Grid>
    );
};

export default React.memo(Slider);
