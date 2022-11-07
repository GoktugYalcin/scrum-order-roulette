import React, {RefObject} from 'react'
import {Button, Modal, Space, Textarea} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {switchModalOpened} from "../redux/slices/controlSlice";
import {createRoulette} from "../redux/slices/rouletteSlice";

export interface modalArgs {
    refText: RefObject<HTMLTextAreaElement> | null
}

const CreateModal = ({refText}: modalArgs) => {
    const dispatch = useAppDispatch()
    const opened = useAppSelector(store => store.control.modalOpened)
    const saveHandler = () => {
        dispatch(createRoulette(refText?.current?.value))
        dispatch(switchModalOpened())
    }

    return <Modal
        opened={opened}
        onClose={() => dispatch(switchModalOpened())}
        title="Create new Scrum list!"
        centered
    >
        <Textarea
            label="Type each people as new line"
            withAsterisk
            minRows={10}
            maxRows={15}
            ref={refText}
        />
        <Space h="md" />
        <Button
            component="button"
            onClick={() => saveHandler()}
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
            Save
        </Button>
    </Modal>
}

export default CreateModal