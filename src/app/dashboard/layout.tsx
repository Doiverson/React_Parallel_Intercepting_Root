// app/dashboard/layout.tsx

export default function DashboardLayout({ 
  children,
  users,
  revenue,
  notifications
}: { 
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
}) {
  return (
    <div className="dashboard-layout p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          {children}
        </div> {/* Content from page.tsx */}
        <div className="dashboard-widgets flex flex-col gap-6">
          <div className="widget bg-slate-50 rounded-xl shadow-sm p-4 transition-all hover:shadow-md">{users}</div> {/* Content from @users/page.tsx */}
          <div className="widget bg-slate-50 rounded-xl shadow-sm p-4 transition-all hover:shadow-md">{revenue}</div> {/* Content from @revenue/page.tsx */}
          <div className="widget bg-slate-50 rounded-xl shadow-sm p-4 transition-all hover:shadow-md">{notifications}</div> {/* Content from @notifications/page.tsx */}
        </div>
      </div>
    </div>
  );
}
