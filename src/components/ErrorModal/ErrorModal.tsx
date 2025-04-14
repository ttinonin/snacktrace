import React from "react";
import Modal from "react-modal";

interface ErrorModalProps {
    body: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.onClose}
                contentLabel="Erro"
                closeTimeoutMS={300}
                overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300"
                className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full transform transition-all duration-300 ease-out scale-100 opacity-100 translate-y-0"
            >
                <h2 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                    Error!
                </h2>
                <p className="mb-6 text-gray-700">{props.body}</p>
                <button
                    onClick={props.onClose}
                    className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-md transition-all w-full cursor-pointer"
                >
                    Close
                </button>
            </Modal>
        </>
    );
}