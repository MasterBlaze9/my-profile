const Skeleton = () => (
	<div className="animate-pulse flex flex-col p-6 bg-slate-50 border border-slate-100 rounded-xl">
		<div className="h-5 w-2/3 bg-slate-200 rounded mb-4" />
		<div className="h-4 w-full bg-slate-200 rounded mb-2" />
		<div className="h-4 w-5/6 bg-slate-200 rounded mb-6" />
		<div className="mt-auto flex gap-3">
			<div className="h-9 flex-1 bg-slate-200 rounded-lg" />
			<div className="h-9 flex-1 bg-slate-200 rounded-lg" />
		</div>
	</div>
);

export default Skeleton;
