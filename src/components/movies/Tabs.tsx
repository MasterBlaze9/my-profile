import React from 'react';

export interface Tab {
	id: number;
	name: string;
	description?: string;
}

interface TabsProps {
	tabs: Tab[];
	activeTab: number;
	onTabChange: (tabIndex: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
	return (
		<section className="flex flex-wrap gap-3 bg-white p-3 ">
			{tabs.map((tab, index) => (
				<button
					key={tab.id}
					onClick={() => onTabChange(index)}
					className={`flex-1 px-5 py-2 rounded-xl font-bold text-xs transition-all ${activeTab === index
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 shadow-sm'
						}`}
					title={tab.description}
				>
					{tab.name}
				</button>
			))}
		</section>
	);
};
