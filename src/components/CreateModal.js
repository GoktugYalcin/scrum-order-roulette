import React from 'react'
import {Button, Modal, Space, Textarea} from "@mantine/core";

const CreateModal = ({opened, setOpened, refText, setData, setHistory}) => {
    const saveHandler = () => {
        const values = refText.current.value
            .split("\n")
            .filter((i) => i.trim() !== "")
            .map((i) => ({ option: i }));
        setData(values);
        localStorage.setItem("scrum-wheel", JSON.stringify(values));
        setOpened(false);
        setHistory([]);
    }

    return <Modal
        opened={opened}
        onClose={() => setOpened(false)}
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