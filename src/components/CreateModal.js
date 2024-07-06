import React, {useEffect, useRef} from 'react'
import {Button, Modal, Space, Textarea} from "@mantine/core";
import {useHistoryStore} from "../bears/HistoryBear";

const CreateModal = () => {
    const refText = useRef(null);
    const setRouletteList = useHistoryStore(state => state.setRouletteList)
    const setModalOpened = useHistoryStore(state => state.setModalOpened)
    const setHistory = useHistoryStore(state => state.setHistory)
    const modalOpened = useHistoryStore(state => state.modalOpened)

    useEffect(() => {
        setTimeout(() => {
            if(modalOpened) {
                refText.current.value = (JSON.parse(localStorage.getItem("scrum-wheel")) ?? []).map(i => i.option).join('\n')
            }
        }, 10)
    }, [modalOpened]);

    const saveHandler = () => {
        const values = refText.current.value
            .split("\n")
            .filter((i) => i.trim() !== "")
            .map((i) => ({ option: i }));
        setRouletteList(values);
        localStorage.setItem("scrum-wheel", JSON.stringify(values));
        setModalOpened(false);
        setHistory([]);
    }

    return <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
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