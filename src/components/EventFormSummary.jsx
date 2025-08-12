import { useSelector, useDispatch } from 'react-redux';
import {
  selectFormData,
  selectSelectedVendors,
  backToFormAction
} from '../redux/eventPlanningSlice';

const fmt = (d) => (d ? new Date(d).toLocaleDateString() : '—');
const rupee = (v) => (v ? `₹${Number(v).toLocaleString('en-IN')}` : '—');

export default function EventFormSummary() {
  const f = useSelector(selectFormData);
  const selected = useSelector(selectSelectedVendors);
  const dispatch = useDispatch();

  return (
    <section className="max-w-5xl mx-auto mt-10">
      <div className="rounded-3xl bg-white/90 shadow-md ring-1 ring-black/5 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Event Details</h3>
          <button
            onClick={() => dispatch(backToFormAction())}
            className="px-3 py-1.5 rounded-full bg-amber-500 text-white text-sm hover:bg-amber-600"
          >
            Edit details
          </button>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Event Name</dt>
            <dd className="text-base font-medium">{f.eventName || '—'}</dd>
          </div>
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Event Type</dt>
            <dd className="text-base font-medium">{f.eventType || '—'}</dd>
          </div>
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Guests</dt>
            <dd className="text-base font-medium">{f.guests || '—'}</dd>
          </div>
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Budget</dt>
            <dd className="text-base font-medium">{rupee(f.budget)}</dd>
          </div>
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Location</dt>
            <dd className="text-base font-medium">{f.location || '—'}</dd>
          </div>
          <div className="border rounded-xl p-4">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Date</dt>
            <dd className="text-base font-medium">{fmt(f.date)}</dd>
          </div>
          <div className="border rounded-xl p-4 sm:col-span-2 lg:col-span-3">
            <dt className="text-xs uppercase tracking-wide text-gray-500">Additional Info</dt>
            <dd className="text-base text-gray-800 whitespace-pre-wrap">
              {f.additionalInfo || '—'}
            </dd>
          </div>
        </dl>

        <div className="mt-4 text-sm text-gray-700">
          <span className="font-medium">Selected vendors:</span>{' '}
          {selected.length ? `${selected.length} added` : 'None yet'}
        </div>
      </div>
    </section>
  );
}
