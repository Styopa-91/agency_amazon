import PageTitle from "../components/PageTitle.tsx";
import {MetricChart} from "../components/MetricChart.tsx";
import {Fragment, useState} from "react";
import {createMetric} from "../services/metrics.ts";
import {toast} from "sonner";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";

export interface ApiError {
    response: {
        status: number;
        data: {
            name: string;
            impressions: string;
            clicks: string;
            message: string;
        };
    };
}

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
      setIsOpen(true)
  }

  function closeModal() {
      setIsOpen(false)
  }
    const CreateMetric = () => {
        const [name, setName] = useState<string>('');
        const [impressions, setImpressions] = useState<number | string>('');
        const [clicks, setClicks] = useState<number | string>('');
        const [error, setError] = useState('');

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            setError('');
            createMetric(name, Number(impressions), Number(clicks))
                .then(response => {
                    setIsOpen(false)
                    toast.success(response.name + " created", {
                        position: 'top-center',
                        duration: 2000,
                        classNames: {
                            title: 'font-normal'
                        }
                    })
                    setTimeout(() => {
                        navigate(0)
                    }, 2000);
                })
                .catch((error: ApiError) => {
                    if (axios.isAxiosError(error)) { // For Axios errors
                        setError(error.response.data.name ?? error.response.data.impressions ?? error.response.data.clicks ?? error.response.data.message)
                        console.log(error); // Optional chaining in case response is undefined
                    } else {
                        console.error("An unknown error occurred", error.response.data);
                    }
                })
        };
        return (
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-50 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel className="relative flex w-11/12 sm:w-96 transform flex-col gap-2 md:gap-4 mt-8 overflow-hidden rounded-[30px] bg-white p-5 md:p-7 lg:p-10 text-center align-middle shadow-card transition-all">
                                        <div className="font-onest text-sm sm:text-base font-bold leading-10 text-left font-inter gradient-text">Create Metric</div>
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 lg:gap-5">
                                            <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                                <label
                                                    htmlFor="name"
                                                    className="h-auto opacity-60 text-xs md:text-customInput"
                                                >Name:</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    placeholder="Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                    className="max-w-[1124px] font-inter font-normal text-xs md:text-customInput leading-customInput ps-2 py-2 w-full bg-white border border-[#C9C9C9] min-h-8 mx-auto space-y-8 rounded-xl focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                                <label
                                                    htmlFor="impressions"
                                                    className="h-auto opacity-60 text-xs md:text-customInput"
                                                >Impressions:</label>
                                                <input
                                                    type="text"
                                                    id="impressions"
                                                    value={impressions}
                                                    placeholder="Impressions"
                                                    onChange={(e) => setImpressions(e.target.value)}
                                                    required
                                                    className="max-w-[1124px] font-inter font-normal text-xs md:text-customInput leading-customInput ps-2 py-2 w-full bg-white border border-[#C9C9C9] min-h-8 mx-auto space-y-8 rounded-xl focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 sm:gap-2 items-start">
                                                <label
                                                    htmlFor="clicks"
                                                    className="h-auto opacity-60 text-xs md:text-customInput"
                                                >Clicks:</label>
                                                <input
                                                    type="text"
                                                    id="clicks"
                                                    value={clicks}
                                                    placeholder="Clicks"
                                                    onChange={(e) => setClicks(e.target.value)}
                                                    required
                                                    className="max-w-[1124px] font-inter font-normal text-xs md:text-customInput leading-customInput ps-2 py-2 w-full bg-white border border-[#C9C9C9] min-h-8 mx-auto space-y-8 rounded-xl focus:outline-none"
                                                />
                                            </div>
                                            {error && <div className="my-4" style={{color: 'red'}}>{error}</div>}
                                            <button
                                                type="submit"
                                                className="bg-[#3E55BC] w-full min-h-11 mb-3 text-white text-xs md:text-customInput rounded-xl border-t-4 border-transparent"
                                            >Create
                                            </button>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        );
    };

    return (
        <div className="flex h-full w-auto flex-col pt-0 md:pt-3 lg:pt-5 gap-3 lg:gap-6">
            <div className="flex justify-between">
                <PageTitle>Dashboard</PageTitle>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        openModal();
                    }}
                    className="w-44"
                >
                    <div
                        className="my-2 flex justify-center items-center rounded-2xl bg-indigo bg-opacity-10 p-2.5 px-2">
                        <p className="font-sans text-xs md:text-sm text-nowrap text-indigo font-medium leading-customPage text-left">
                            Create metric
                        </p>
                    </div>
                </button>
            </div>
            <MetricChart/>
            <CreateMetric/>
        </div>
    );
};

export default Dashboard;
