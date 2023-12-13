import { useStore } from "@/store";
import Image from "next/image";
const mockData = {
	aimetInfo: {
		phoneNumber: "+51904492115",
	},
};

const WhatsappFloatIcon = () => {
	/*   const phoneNumber = useStore(store => store.aimetInfo.phoneNumber)
	 */
	const phoneNumber = mockData.aimetInfo.phoneNumber;
	return (
		<button className="bg-white fixed flex flex-row-reverse items-center bottom-8 right-8 z-10 hover:opacity-75 menu-item-hover">
			<div
				className="phone-call cbh-phone cbh-green cbh-show  cbh-static"
				id="clbh_phone_div"
			>
				<a
					id="WhatsApp-button"
					href={`https://wa.me/${phoneNumber}`}
					target="_blank"
					rel="noreferrer"
					className="phoneJs"
					title="Aimet Whatsapp"
				>
					<WhatsappIcon />
				</a>
			</div>
		</button>
	);
};

function WhatsappIcon() {
	return (
		<>
			<div className="cbh-ph-circle" />
			<div className="cbh-ph-circle-fill" />
			<div className="cbh-ph-img-circle1" />
		</>
	);
}

export default WhatsappFloatIcon;
